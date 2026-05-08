import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quo
            voluptates nisi! Assumenda repellendus accusamus, quisquam error
            veritatis rerum iure vero, voluptate, itaque asperiores et sit ipsum
            suscipit provident dolorem voluptates minima! Voluptates excepturi
            saepe, enim inventore iste ipsam maxime minima nemo illum,
            consequatur ad. Ut explicabo voluptatem provident perferendis!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            adipisci atque debitis ipsa a dolorum, voluptates delectus enim
            repellendus eum? Ullam, alias dicta numquam fuga ad incidunt maxime
            architecto minus.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            voluptas ut sed, beatae nam repellat modi, labore cumque quibusdam
            nulla reprehenderit quod itaque sit sequi neque, velit enim minus
            reiciendis!
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US ?"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            accusamus ab reiciendis officiis minus explicabo est nam, expedita
            commodi perspiciatis!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convinencs:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            accusamus ab reiciendis officiis minus explicabo est nam, expedita
            commodi perspiciatis!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            accusamus ab reiciendis officiis minus explicabo est nam, expedita
            commodi perspiciatis!
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
