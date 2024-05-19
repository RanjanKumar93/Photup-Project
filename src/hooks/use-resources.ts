import { CloudinaryResource } from "@/types/cloudinary";
import { useQuery, useQueryClient } from "@tanstack/react-query";

interface useResources {
  initialResources?: Array<CloudinaryResource>;
  disableFetch?: boolean;
  tag?: string;
}

export function useResources(options?: useResources) {
  const queryClient = useQueryClient();
  const { disableFetch = false } = options || {};
  const { data: resources } = useQuery({
    queryKey: ["resources", options?.tag],
    queryFn: async () => {
      const { data } = await fetch("/api/resources").then((r) => r.json());
      return data;
    },
    initialData: options?.initialResources,
    enabled: !disableFetch,
  });

  function addResources(results: Array<CloudinaryResource>) {
    queryClient.setQueryData(
      ["resources", String(process.env.NEXT_PUBLIC_CLOUDINARY_LIBRARY_TAG)],
      (old: Array<CloudinaryResource>) => {
        return [...results, ...old];
      }
    );
    queryClient.invalidateQueries({
      queryKey: [
        "resources",
        String(process.env.NEXT_PUBLIC_CLOUDINARY_LIBRARY_TAG),
      ],
    });
  }

  return {
    resources,
    addResources,
  };
}