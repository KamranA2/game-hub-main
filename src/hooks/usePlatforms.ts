import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { APIClient } from "../services/api-clients";
import ms from "ms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("1d"), //24hr
    initialData: platforms,
  });

export default usePlatforms;
