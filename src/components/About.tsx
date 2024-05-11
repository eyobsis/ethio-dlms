
const About = () => {
    return (
      <>
      <section className="relative w-full h-[500px] flex items-center justify-center bg-gray-900">
      <img
        alt="Hero Banner"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        height="500"
        src="/aboutus.jpeg"
        style={{
          aspectRatio: "1920/500",
          objectFit: "cover",
        }}
        width="1920"
      />
     
    </section>
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 bg">

        
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-6">Find Out More About Us</p>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <h2 className="text-2xl font-bold mb-2">Driving License Management System</h2>
            <p className="text-lg mb-4">
              Designed for the use to automate the process of issuing driving license and to facilitate the flow of information.
            </p>
          </div>
          <div className="w-full md:w-1/2 xl:w-2/3 p-4">
            <h2 className="text-2xl font-bold mb-2">Our Services</h2>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 xl:w-1/3 p-4">
                <div className="bg-white rounded shadow-md p-4">
                  <h3 className="text-lg font-bold mb-2">Ease up the Licensing Process</h3>
                  <p className="text-lg mb-4">Your license process will be easier than manual process.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 p-4">
                <div className="bg-white rounded shadow-md p-4">
                  <h3 className="text-lg font-bold mb-2">Reduce Time Wastage</h3>
                  <p className="text-lg mb-4">We guarantee that you won't waste your time as manual system.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 p-4">
                <div className="bg-white rounded shadow-md p-4">
                  <h3 className="text-lg font-bold mb-2">Reduce Operational Cost</h3>
                  <p className="text-lg mb-4">Your transport costs to visit RMV will be saved.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 p-4">
                <div className="bg-white rounded shadow-md p-4">
                  <h3 className="text-lg font-bold mb-2">Fast Response</h3>
                  <p className="text-lg mb-4">We provide fast response to users.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 p-4">
                <div className="bg-white rounded shadow-md p-4">
                  <h3 className="text-lg font-bold mb-2">Accurate Information</h3>
                  <p className="text-lg mb-4">We store and retrieve information accurately.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      </>
    );
  };
  
  export default About;