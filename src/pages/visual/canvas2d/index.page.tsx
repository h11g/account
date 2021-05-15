import React, { useRef, useEffect } from 'react'

const Canvas2d = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      const { width, height } = canvasRef.current
      const rectSize: [number, number] = [100, 100]
      const context = canvasRef.current.getContext('2d')
      if (context) {
        context.save()
        context.fillStyle = 'red'
        //  让画出的正方形居中，先平移画布
        context.translate(-0.5 * rectSize[0], -0.5 * rectSize[1])
        context.beginPath()
        context.rect(0.5 * width, 0.5 * height, ...rectSize)
        context.fill()
        context.restore()
      }
    }
  }, [])

  return (
    <div>
      <canvas ref={canvasRef} width='512' height='512' />
    </div>
  )
}

export default Canvas2d
