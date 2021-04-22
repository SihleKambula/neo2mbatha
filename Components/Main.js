import React from "react";
import style from "../styles/Main.module.scss";
const Main = () => {
  return (
    <div className={style.main}>
      <div className={style.image_section}>
        <h1 className={style.heading}>
          Bring the store <br /> to your door.
        </h1>
        <div className={style.image_container}>
          <img src='images/main.png' alt='delivery' />
        </div>
      </div>
      <div className={style.form_section}>
        <h2>Contact our delivery team</h2>
        <p>We'll get back to you with in less than 10 minutes</p>
        <form>
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
        </form>
      </div>
    </div>
  );
};

export default Main;
