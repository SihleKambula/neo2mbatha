import React from "react";
import style from "../styles/Main.module.scss";
const Main = () => {
  return (
    <div className={style.main}>
      <div className={style.image_section}>
        <div className={style.image_container}>
          <img src='images/main.png' alt='delivery' />
        </div>
      </div>
      <div className={style.form_section}>
        <h1 className={style.heading}>
          Bring the store <br /> to your door.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, vel?
          Voluptas impedit, recusandae hic unde pariatur suscipit qui nemo nam
          dolor.
        </p>

        <button className={style.btn}>
          <a href='https://forms.gle/mDZeqgnjtXJKUpUT9' target='blank'>
            Place your order
          </a>
        </button>
        {/* <h2>Contact our delivery team</h2>
        <p>We'll get back to you with in less than 10 minutes</p> */}
        {/* <iframe
          src='https://docs.google.com/forms/d/e/1FAIpQLSf6Ea1W_AzLOP1GIns883qIri1lXjvBbRB2-7sWPsgiYNrsGQ/viewform?embedded=true'
          width='540'
          height='500'
          frameborder='0'
          marginheight='0'
          marginwidth='0'
        >
          Loading…
        </iframe> */}
        {/* <form>
          <div className='input'>
            <label htmlFor='full_name'>Full name</label>
            <input type='text' name='full_name' placeholder='John Doe' />
          </div>
          <div className='input'>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              name='email'
              placeholder='mbali@neo2mbatha.com'
            />
          </div>
          <div className='input'>
            <label htmlFor='phone_number'>Phone number</label>
            <input
              type='number'
              name='phone_number'
              placeholder='012 345 6780'
            />
          </div>
          <div className='input'>
            <label htmlFor='store'>Store</label>
            <select name='store'>
              <option value='.'>Choose....</option>
              <option value='PicknPay'>PicknPay</option>
              <option value='Food Lovers'>Food Lovers</option>
              <option value='Shoprite'>Shoprite</option>
            </select>
          </div>
          <div className='grocery_list'>
            <label htmlFor='grocery_list'>Grocery list</label>
            <textarea
              name='grocery_list'
              placeholder='Your list here'
            ></textarea>
          </div>
        </form> */}
      </div>
    </div>
  );
};

export default Main;
