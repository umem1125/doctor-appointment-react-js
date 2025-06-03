import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-center text-3xl font-bold text-gray-800">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12 items-center">
        <img
          className="w-full md:max-w-[360px] rounded-lg shadow-lg"
          src={assets.about_image}
          alt="About Us"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dicta
            accusamus, nisi harum, voluptatibus voluptatum iste delectus nobis
            dignissimos molestiae, hic voluptas atque et. Delectus debitis quas
            nemo recusandae quos?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dicta
            accusamus, nisi harum, voluptatibus voluptatum iste delectus nobis
            dignissimos molestiae, hic voluptas atque et. Delectus debitis quas
            nemo recusandae quos?
          </p>
          <h2 className="text-lg font-semibold text-gray-800">Our Vision</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
            consequatur explicabo adipisci in porro, nobis, sapiente quia
            aspernatur quos fugiat delectus maiores placeat accusantium libero,
            unde labore neque. Ab, totam.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="text-2xl my-4 text-center">
          <p>
            WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800">Efficiency</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt vero
              molestias nihil ex eaque ea amet sequi dolor, quisquam, cupiditate
              dolores consequuntur voluptatem, maxime asperiores. Explicabo
              magnam vitae necessitatibus culpa!
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800">Convenience</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt vero
              molestias nihil ex eaque ea amet sequi dolor, quisquam, cupiditate
              dolores consequuntur voluptatem, maxime asperiores. Explicabo
              magnam vitae necessitatibus culpa!
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800">Personalization</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt vero
              molestias nihil ex eaque ea amet sequi dolor, quisquam, cupiditate
              dolores consequuntur voluptatem, maxime asperiores. Explicabo
              magnam vitae necessitatibus culpa!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
