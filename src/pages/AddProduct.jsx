import React from 'react'
import { upload_area } from '../assets/assets'

const AddProduct = () => {
  return (
    <form className='flex flex-col w-full items-start gap-3' action="" encType='multipart/formdata'>
      <div>
        <p>Upload Image</p>
      </div>
      <label htmlFor="image">
        <img className='w-20 cursor-pointer' src={upload_area} alt="" />
        <input type="file" id='image' hidden/>
      </label>
      <div className='w-full'>
        <p className='mb-2'>Product Name</p>
        <input className='w-full max-w-[500px] px-3 py-2 border border-slate-400' type="text" placeholder='Type product name' required/>
      </div>
      <div className='w-full'>
        <p className='mb-2'>Product Description</p>
        <textarea className='w-full max-w-[500px] px-3 py-2 border border-slate-400' type="text" placeholder='Type product description' required/>
      </div>


      <div className=''>

        <div className='mb-2'>
          <p className='mb-2'>Product Category</p>
          <select className='w-full px-3 py-2'>
            <option value="">select category</option>
            <option value="Men">Men</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div className='mb-2'>
          <p className='mb-2'>Product Subcategory</p>
          <select className='w-full px-3 py-2'>
            <option value="">select category</option>
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Product Prize</p>
          <input className='px-2 py-1 border border-slate-400' type="number" placeholder='Enter price'/>
        </div>

      </div>

      <div>
          <p className='mb-2'>Product Sizes</p>
          <div className='flex gap-3'>
            <div>
              <p className='bg-slate-200 px-3 py-1'>S</p>
            </div>
            <div>
              <p className='bg-slate-200 px-3 py-1'>M</p>
            </div>
            <div>
              <p className='bg-slate-200 px-3 py-1'>L</p>
            </div>
            <div>
              <p className='bg-slate-200 px-3 py-1'>XL</p>
            </div>
          </div>
      </div>

        <div className='flex gap-2 mt-2'>
          <input type="checkbox" name="" id="bestSeller" />
          <label className='' htmlFor="bestSeller">Best Seller</label>
        </div>

        <button className='px-4 py-2 mt-4 bg-black text-white' type='submit'>Add Product</button>
    </form>
  )
}

export default AddProduct