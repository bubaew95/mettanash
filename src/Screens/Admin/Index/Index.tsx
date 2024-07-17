import { useEffect } from "react";
import { RootState, useAppDispatch, useAppSelector } from "../../../Store";
import { getChapters, loading, setError } from "../../Main/main-slice";
import { getChaptersApi } from "../../../FireBase/FirebaseApi";
import ChapterItems from "../../../Components/Admin/ChapterItems/ChapterItems";
import Button from "../../../Components/Button/Button";

const IndexScreen = () => {
  const chapters = useAppSelector((state: RootState) => state.chapters.items);
  const isLoading = useAppSelector(
    (state: RootState) => state.chapters.isLoading
  );
  const errors = useAppSelector((state: RootState) => state.chapters.error);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const loadChapters = async () => {
      dispatch(loading());
      try {
        const data = await getChaptersApi("che");
        dispatch(getChapters(data));
      } catch (error: any) {
        dispatch(setError(error.message));
      }
    };

    if (!isLoading && chapters.length === 0) {
      loadChapters();
    }
  }, [dispatch]);

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold ">Главы</h1>
        <Button className="primary" onClick={() => {}}>
          Добавить главу
        </Button>
      </div>

      {isLoading && <p>Loading...</p>}
      {!isLoading && errors?.length! > 0 && <p>{errors}</p>}
      {!isLoading && chapters.length > 0 && <ChapterItems items={chapters} />}
    </div>
  );
};
export default IndexScreen;
