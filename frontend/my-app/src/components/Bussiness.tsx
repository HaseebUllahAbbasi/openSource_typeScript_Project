import React, { FC } from "react";
import { features } from "../constants/indext";
import styles, { layout } from "../styles";
import Button from "./Button";
import FeatureCard from "./FeatureCard";


const Business: FC = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the Business, <br className="sm:block hidden" />
          We Will handle the Money

        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button style={`mt-10`} />
      </div>
      <div className={`${layout.sectionImg} flex-col `}>
        {
          features.map((item, key) => <FeatureCard key={item.id} {...item} index={key} />)
        }
      </div>
    </section>
  )

}
export default Business;
