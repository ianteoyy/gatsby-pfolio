import React, { useEffect } from "react"
import Sketch from "react-p5"
import useWindowSize from "../hooks/useWindowSize"

class Particle {
  constructor(p5, width, height) {
    this.pos = p5.createVector(p5.random(width), p5.random(height))
    this.vel = p5.createVector(p5.random(-2, 2), p5.random(-2, 2))
    this.size = 5
  }

  update(width, height) {
    this.pos.add(this.vel)
    this.edges(width, height)
  }

  draw(p5) {
    p5.noStroke()
    p5.fill("rgba(255,255,255,0.7)")
    p5.circle(this.pos.x, this.pos.y, this.size)
  }

  edges(width, height) {
    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1
    }
    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1
    }
  }

  checkParticles(particles, p5) {
    particles.forEach(particle => {
      const d = p5.dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y)
      if (d < 100) {
        p5.stroke("rgba(255,255,255,0.6)")
        p5.line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y)
      }
    })
  }
}
const SquareBlocksBackground = () => {
  let width;
  let height;
  const maxParticles = (width) => Math.floor(width / 10)
  const particles = []

  const setup = (p5, canvasParentRef) => {
    width = document.body.clientWidth;
    height = window.innerHeight
    p5.createCanvas(width, height).parent(canvasParentRef)
    for (let i = 0; i < maxParticles(width); i++) {
      particles.push(new Particle(p5, width, height))
    }
  }

  const draw = p5 => {
    p5.background("#343a40")
    particles.forEach((particle, index) => {
      particle.update(width, height)
      particle.draw(p5)
      particle.checkParticles(particles.slice(index), p5)
    })
  }

  const windowResized = p5 => {
    width = document.body.clientWidth;
    height = window.innerHeight
    p5.resizeCanvas(width, height)
    particles.splice(0, particles.length)
    for (let i = 0; i < maxParticles(width); i++) {
      particles.push(new Particle(p5, width, height))
    }
  }

  return (
    <Sketch setup={setup} draw={draw} windowResized={windowResized}></Sketch>
  )
}

export default SquareBlocksBackground
