import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithCourseService } from "./baseQuery";

interface ICourse {
      ClassName: string,
      Date: string,
      Time: string,
      Location: string,
      Description: string,
      Image: string
}

export const courseApi = createApi({
      reducerPath: 'courseApi',
      baseQuery: baseQueryWithCourseService,
      endpoints: builder => ({
            getCourseFree: builder.query<ICourse[], void>({
                  query: () => "coursesFree",
            })
      })
});
export const { useGetCourseFreeQuery } = courseApi;
