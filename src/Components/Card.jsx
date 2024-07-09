import react, { useState } from "react";
import Modal from "./Detail";

const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();
  // console.log(book)
  return (
    <>
      {book.map((item, index) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        if (thumbnail != undefined && amount != undefined) {
          return (
            <div key={index}>
              <div
                className="w-72 h-fit bg-slate-100 rounded-lg  
                           transform transition duration-500 p-3
                           hover:scale-105 hover:shadow-2xl"
                onClick={() => {
                  setShow(true);
                  setItem(item);
                }}
              >
                <div className="flex items-center justify-center mt-2">
                  <img
                    className="w-fit h-48 object-cover rounded-t-lg"
                    src={thumbnail}
                    alt=""
                  />
                </div>

                <div className="flex flex-col justify-center items-center">
                  <h3 className="font-medium text-2xl mb-1">
                    {item.volumeInfo.title}
                  </h3>
                  <p className="font-light text-lg">&#8377;{amount}</p>
                </div>
              </div>
              <Modal
                show={show}
                item={bookItem}
                onClose={() => setShow(false)}
              />
            </div>
          );
        }
      })}
    </>
  );
};
export default Card;
