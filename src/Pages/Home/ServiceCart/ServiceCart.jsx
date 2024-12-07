
const ServiceCart = ({item}) => {
    const { name , image , price , description , image_url} = item
    return (
        <div className="gird md:grid-cols-4 ">
                     <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                src={image_url}
                alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ServiceCart;