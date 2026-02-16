import Location from "../icons/Location";
import Dollar from "../icons/Dollar";

function DetailsPage(props) {
  const {
    id,
    image,
    name,
    price,
    discount,
    introduction,
    details,
    ingredients,
    recipe,
  } = props;

  return (
    <div
      className="max-w-4xl mx-auto
    "
    >
      <h2 className="border-b-2 mx-8 border-orange-500 mb-6 w-fit text-2xl">
        Details
      </h2>
      <div className="mx-8">
        <div className="flex">
          <img className="w-70 rounded-xl" src={image} alt={name} />
          <div className="ml-6">
            <h3 className="text-lg text-orange-500">{name}</h3>
            <span className="flex items-center">
              <Location className="my-5 mr-0 ml-10 text-gray-500" />
              {details[0].Cuisine}
            </span>
            <span className="flex items-center">
              <Dollar className="my-5 mr-0 ml-10 text-gray-500" />
              {discount ? (price * (100 - discount)) / 100 : price}$
            </span>
            {discount ? (
              <span className="bg-red-400 text-white py-3 px-0 flex justify-center mt-5 rounded">
                {discount}$ OFF
              </span>
            ) : null}
          </div>
        </div>
        <div className="my-8 mx-0 leading-6 text-justify">
          <p>{introduction}</p>
        </div>
        <div className="mb-14">
          <h4 className="my-6 text-orange-500 text-2xl">Details</h4>
          <ul className="list-none">
            {details.map((detail, index) => (
              <li className="flex items-center my-3 mx-0" key={index}>
                <p className="font-semibold mx-3 my-0 text-base">
                  {Object.keys(detail)[0]}:{" "}
                </p>
                <span className="text-gray-500">
                  {Object.values(detail)[0]}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-25">
          <h4 className="text-orange-500 text-2xl my-6 mx-0">Ingredients</h4>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-orange-500 text-2xl my-6 mx-0">Recipe</h4>
          {recipe.map((item, index) => (
            <div className={index%2 ? "flex items-center py-5 px-3 text-justify bg-orange-300":"flex items-center py-5 px-3 text-justify bg-orange-100"} key={index}>
              <span className="py-0 pr-4 pl-1">{index + 1}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <button className="w-full border-0 bg-orange-500 text-white p-4 text-xl rounded-xl cursor-pointer mb-25 mt-8">Add to Cart</button>
      </div>
    </div>
  );
}

export default DetailsPage;
