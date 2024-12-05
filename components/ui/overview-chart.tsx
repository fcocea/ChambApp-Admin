"use client";
import React, { useEffect, useRef } from 'react';

const OverviewChart = ({ data }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const total = data.reduce((sum, item) => sum + item.value, 0);
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 10;
    let startAngle = 0;

    data.forEach(item => {
      const sliceAngle = (item.value / total) * 2 * Math.PI;
      const endAngle = startAngle + sliceAngle;

      // Draw slice
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = item.color;
      ctx.fill();

      // Draw label
      const midAngle = startAngle + sliceAngle / 2;
      const labelX = centerX + (radius / 2) * Math.cos(midAngle);
      const labelY = centerY + (radius / 2) * Math.sin(midAngle);
      ctx.fillStyle = "#000";
      ctx.font = "14px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(`${item.name} (${((item.value / total) * 100).toFixed(1)}%)`, labelX, labelY);

      startAngle = endAngle;
    });
  }, [data]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <canvas ref={canvasRef} width="400" height="400"></canvas>
    </div>
  );
};

export default OverviewChart;