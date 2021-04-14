import React, { useState } from 'react'

const Locate = () => {
  const results = [
    {
      "areaSido": "강원",
      "areaGugun": "강릉시"
    },
    {
      "areaSido": "강원",
      "areaGugun": "고성군"
    },
    {
      "areaSido": "강원",
      "areaGugun": "동해시"
    },
  ]

  const arr2 = results.map(li => li["areaSido"]);
  const arr3 = arr2.filter((el, i, a) => a.indexOf(el) === i);
  console.log('aar', arr3);

  return (
    <div>
      <div className="left"></div>
      <div className="right"></div>
    </div>
  )
}

export default Locate