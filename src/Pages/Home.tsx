import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchCollections, fetchPhotos } from "../store/api";
import Loader from "../Components/Loader";

const Home = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, isError } = useAppSelector(
    (state) => state.collections
  );

  const photosState = useAppSelector((state) => state.photos);
  const {
    data: photosData,
    isLoading: isPhotosLoading,
    isError: isPhotosError,
  } = photosState;

  useEffect(() => {
    dispatch(fetchCollections());
    dispatch(fetchPhotos({ page: 1, per_page: 20 }));
  }, [dispatch]);

  if (isLoading || isPhotosLoading) return <Loader />;

  if (isError || isPhotosError)
    return alert("Oops.! Something went wrong please refresh");

  return (
    <>
      <div className="flex flex-col w-full items-center justify-center bg-gray-950">
        <div className="flex w-full items-center justify-center mt-28"></div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-2 content-center items-start justify-center">
          {data &&
            data.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center justify-center"
              >
                <div className="flex rounded-xl border-2 p-4 border-gray-100">
                  <img
                    style={{ width: 250 }}
                    src={item.cover_photo.urls.thumb}
                    alt="cover_photo"
                    className="object-contain transition hover:scale-110 rounded-2xl duration-300 delay-150 cursor-pointer"
                  />
                </div>
                <div className="flex flex-col max-w-sm items-start justify-center">
                  <p className="text-white text-xl font-IBM-Plex-Mono font-normal tracking-normal py-4">
                    Title: {item.title}
                  </p>
                  <p className="text-white text-md font-IBM-Plex-Mono font-normal tracking-normal">
                    Name: {item.user.name}
                  </p>
                  <div className="flex">
                    <p className="text-white text-sm font-IBM-Plex-Mono font-normal tracking-normal">
                      Description: {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="flex w-full items-center justify-center mt-28"></div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 content-center items-start justify-center">
          {photosData &&
            photosData?.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center justify-center"
              >
                <div className="flex rounded-xl border-2 p-4 border-gray-100">
                  <img
                    style={{ width: 250 }}
                    src={item.user.profile_image.large}
                    alt="cover_photo"
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col max-w-xs items-start justify-center">
                  <p className="text-white text-xl font-IBM-Plex-Mono font-normal tracking-normal">
                    Description: {item.user.name}
                  </p>
                  <p className="text-white text-md font-IBM-Plex-Mono font-normal tracking-normal">
                    Name: {item.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
