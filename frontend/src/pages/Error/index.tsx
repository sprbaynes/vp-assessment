/* eslint "@typescript-eslint/no-explicit-any": "off" */
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error:any = useRouteError();

  return (
    <>
        <div className="mx-auto bg-slate-200 text-center max-w-screen-lg py-8 mt-8">
            <h1 className="text-center sm:text-5xl text-2xl mb-4">Oops!</h1>
            <p className="mb-4 font-bold">Sorry, an unexpected error has occurred.</p>
            <p className="mb-8">
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    </>
  );
}