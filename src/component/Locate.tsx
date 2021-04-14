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
    {
      "areaSido": "서울",
      "areaGugun": "중구"
    },
    {
      "areaSido": "서울",
      "areaGugun": "관악구"
    },
    {
      "areaSido": "서울",
      "areaGugun": "강남구"
    },
  ]
  const date = [];
  const [tempdata, SetTempdata] = useState([]);
  // 첫번째 3, 두번째 3 
  const arr2 = results.map(li => li["areaSido"])
    .filter((el, i, a) => {
      date.push(el.length);
      // console.log(el.length)
    return a.indexOf(el) === i 
  });
  console.log('aar', arr2);
  // console.log('leng', date);
  return (
    <div>
      <div className="left">
        <ul>
          {arr2.map((item, index) => {
            return (
              <li>{arr2[index]}</li>
            )
          })}
        </ul>
      </div>
      <div className="right"></div>
    </div>
  )
}

export default Locate