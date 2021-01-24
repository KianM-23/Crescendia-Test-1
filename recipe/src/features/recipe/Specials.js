import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ingredientSelect } from "../ingredient/ingredientSlice";

function Specials({ id }) {
  const [special, setSpecial] = useState({});
  const { ingredients } = useSelector(ingredientSelect);
  useEffect(() => {
    setSpecial(
      ingredients.find((ingredient) => ingredient.ingredientId === id)
    );
  }, [id]);

  console.log(special);
  return (
    <div className="flex text-left ">
      {!isEmpty(special) && (
        <div className="mx-2 flex-co1">
          <div className="mb-1 text-lg font-extrabold">{special.title}</div>
          <div className="font-extrabold text-red-300">{special.type}</div>
          <div className="font-semibold text-red-300">{special.text}</div>
        </div>
      )}
    </div>
  );
}

export default Specials;
