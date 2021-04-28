import style from "../styles/Team.module.scss";
import CardBuilder from "./CardBuilder";
import team from "../model/team";

const Team = () => {
  return (
    <div className={style.container}>
      <h1 className={style.heading}>Who is behind Neo2Mbatha</h1>
      <div className={style.grid}>
        {team.map((member) => {
          return (
            <CardBuilder
              image={member.image}
              name={member.name}
              role={member.role}
              socialMediaLinks={member.socialMediaLinks}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Team;
