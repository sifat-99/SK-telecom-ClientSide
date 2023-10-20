import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";


const Update = () => {

    const product = useLoaderData();


        const handleUpdate = (e) => {
            e.preventDefault();
            const name = e.target.name.value;
            const quantity = e.target.quantity.value;
            const Price = e.target.Price.value;
            const category = e.target.category.value;
            const photo = e.target.photo.value;
            const _id = product._id;
            const updatedProduct = { name, quantity, Price, category, photo, _id };
            console.log(updatedProduct);
            fetch(`https://server-side-assignment10.vercel.app/products/${_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedProduct),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    swal("Congratulation!", "Data Updated Successfully", "success");
                });
        }


    console.log(product)
    return (
        <div className="bg-[#F4F3F0] p-8 md:p-24 w-11/12 mx-auto mt-32">
      <h2 className="text-3xl font-extrabold">Update Product</h2>
      <form onSubmit={handleUpdate} >
        {/* form name and quantity row */}
        <div className="md:flex mb-8 gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <label className="input-group ">
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                className="input input-bordered w-full"
                defaultValue={product?.name}
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
                defaultValue={product?.quantity}
                required
              />
            </label>
          </div>
        </div>
        {/* form Brand row */}
        <div className="md:flex mb-8 gap-4">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="Price"
                placeholder="Price"
                className="input input-bordered w-full"
                defaultValue={product?.Price}
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="Category"
                className="input input-bordered w-full"
                defaultValue={product?.category}
                required
              />
            </label>
          </div>
        </div>
        {/* form category and details row */}
        {/* form Photo url row */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full"
                defaultValue={product?.photo}
                required
              />
            </label>
          </div>
        </div>
        <div className="flex items-center justify-center">
        <input type="submit" value="Update" className="btn btn-secondary text-white" />
        </div>
      </form>
    </div>
    );
};

export default Update;