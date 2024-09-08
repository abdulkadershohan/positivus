"use server";
import qs from "qs";

const apiUrl = process.env.STRAPI_ENDPOINT
export const find = async (
    model: string,
    query: any = {},
    cache: "force-cache" | "no-cache" | "no-store" = "force-cache",
    revalidate?: number
) => {
    const queryString = qs.stringify(query, {
        arrayFormat: "indices",
        encode: false,
        indices: false
    });

    try {
        const response = await fetch(`${apiUrl}/api/${model}/?${queryString}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.STRAPI_AUTH_TOKEN}`
            },
            ...{
                ...(revalidate ? {} : { cache }),
                ...(revalidate
                    ? {
                        next: {
                            revalidate: revalidate
                        }
                    }
                    : {})
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const data = await response.json();

        return { data, error: null };
    } catch (error: any) {
        console.error(`Error during API call: ${error.message}`);
        return {
            data: null,
            error: error.message || "An error occurred during data fetch"
        };
    }
};
