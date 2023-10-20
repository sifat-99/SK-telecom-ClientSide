import { useEffect, useState } from "react";

const ExtraSection = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetch("/Feedback.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFeedback(data);
      });
  }, []);
  return (
    <div className="mt-20">
      <h1 className="text-6xl text-center mb-12">Why Choose Us</h1>
      <div className=" max-w-7xl glass grid grid-cols-2 border justify-between items-center">
        <div className="border p-12">
          <h1 className="text-center text-3xl text-black font-bold ">
            Best Offer and deals you will ever find
          </h1>
          <p className="text-justify px-8 mt-4 text-green-300">
            Our website is for combining all the product in one place so that
            people can easily find their desire product.{" "}
          </p>
          <button className="btn bg-orange-400 text-white w-1/4 ml-8 mt-4">
            More Details
          </button>
        </div>
        <div className="">
          <h2 className="card-title">Life hack</h2>
          <p>How to park your car at your garage?</p>
        </div>
      </div>
      <div>
        <h1 className="text-6xl text-center mb-12 mt-12">Users Feedback</h1>

        <div>
          {feedback.map((feedback, index) => (
            <div
              key={index}
              className="max-w-7xl glass border justify-between items-center"
            >
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th className="text-start">Name</th>
                      <th className="text-center">Feedback</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr className="bg-base-200 text-center">
                      <th>{feedback.id}</th>
                      <td className="text-start">{feedback.name}</td>
                      <td>{feedback.feedback}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
