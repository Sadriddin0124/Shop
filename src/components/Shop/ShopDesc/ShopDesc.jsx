import React, { useState } from 'react'
import "./ShopDesc.scss"
const ShopDesc = () => {
    const [desc, setDesc] = useState([
        {id: 1, desc: "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla."},
        {id: 2, desc: "Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. "},
        {id: 3, title: "Living Room:", desc: "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {id: 4, title: "Dining Room:", desc: "The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life."},
        {id: 5, title: "Office:", desc: "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    ])
  return (
    <div className='desc'>
      <div className="desc__top">
        <h1 className='desc__top-link_active'>Product Description</h1>
        <h1 className='desc__top-link'>Reviews (19)</h1>
      </div>
      <div className="desc__text">
        {
            desc?.map((item,index)=> {
                return <div className="desc__text-item" key={index}>
                    <h1 className='desc__text-title'>{item?.title}</h1>
                    <h1 className='desc__text-desc'>{item?.desc}</h1>
                </div>
            })
        }
      </div>
    </div>
  )
}

export default ShopDesc
