import style from "../styles/Team.module.scss";

const CardBuilder = ({ image, name, role, socialMediaLinks }) => {
  return (
    <div className={style.card_container}>
      <div className={style.image}>
        <img src={`${image}`} alt={`${name}`} />
      </div>
      <div className={style.name}>
        <p>{name}</p>
      </div>
      <div className={style.role}>
        <p>{role}</p>
      </div>
      <div className={style.social_media}>
        {socialMediaLinks.map((link) => {
          return <i key={link}>{link}</i>;
        })}
      </div>
    </div>
  );
};

export default CardBuilder;
