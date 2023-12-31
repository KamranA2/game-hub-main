import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../services/api-clients";
import genres from "../data/genres";
import ms from "ms";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("1d"), //24h
    initialData: genres,
  });
export default useGenres;
