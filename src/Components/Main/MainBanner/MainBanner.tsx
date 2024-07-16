import classes from "./MainBanner.module.css";
import logo from "../../../assets/ch.png";

export default function () {
  return (
    <div className="flex justify-between bg-green-500 p-4 rounded-md mt-10">
      <div>
        <p className="mb-3 text-white text-lg font-bold">
          Unclock All Courses & Premium Contents!
        </p>
        <button className={classes.button}>Upgrade</button>
      </div>
      <div className="w-auto">
        <img src={logo} className="w-28  " />
      </div>
    </div>
  );
}
