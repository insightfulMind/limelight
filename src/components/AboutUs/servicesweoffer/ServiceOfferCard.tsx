import React from "react";
import styles from "./offer.module.css";
import useScreenType from "@/commonFunctions/useWindowSize";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

interface FitStepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  showArrow?: boolean;
  nextLine?: boolean; // Indicates if this card should use stepCard3
  imageSrc?:string;
  imageSrcWeb?:string;
}

const ServiceOfferCard: React.FC<FitStepCardProps> = ({
  stepNumber,
  title,
  description,
  showArrow = false,
  nextLine = false,
  imageSrc,
  imageSrcWeb
}) => {
  const screenType = useScreenType();
  const isMobile = screenType === "MOBILE";



  return (
    <div className={styles.stepCard}>
            <div className={styles.imageContainer}>
        <img src={ isMobile ? imageSrc : imageSrcWeb} alt={"offerCard"} className={styles.image} />
      </div>
      {/* <div className={styles.stepCountShower}>{stepNumber}</div> */}
      <div className={styles.textContainer2}>
      <h4 className={styles.stepTitle}>{title}</h4>
      <p className={styles.stepDesc}>{description}</p>
         <div className={styles.qoutecontainer}>
          <p className={styles.get_your_qoute}>Go to nano-coating service</p>
          <HiOutlineArrowNarrowRight size={30} color="#010fad" />
        </div>
      </div>
    </div>
  );
};

export default ServiceOfferCard;