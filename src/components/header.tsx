export default function Header() {
  return (
    <div className="flex gap-10 w-full h-screen items-center justify-center mt-auto">
      <div className="flex flex-col">
        <h1 className="text-desktopH1 text-brand-primaryPurple">Desktop</h1>
        <div className="flex flex-col gap-3">
          <h1 className=" text-neutrals-13 text-desktopH1">Heading 1</h1>
          <h1 className=" text-neutrals-12 text-desktopH2">Heading 2</h1>
          <h1 className=" text-neutrals-11 text-desktopH3">Heading 3</h1>
          <h1 className=" text-neutrals-10 text-desktopH4">Heading 4</h1>
          <h1 className=" text-neutrals-9 text-desktopH5">Heading 5</h1>
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="text-mobileH1 text-brand-primaryPurple">Mobile</h1>

        <div className="flex flex-col gap-3">
          <h1 className=" text-neutrals-13 text-mobileH1">Heading 1</h1>
          <h1 className=" text-neutrals-12 text-mobileH2">Heading 2</h1>
          <h1 className=" text-neutrals-11 text-mobileH3">Heading 3</h1>
          <h1 className=" text-neutrals-10 text-mobileH4">Heading 4</h1>
          <h1 className=" text-neutrals-9 text-mobileH5">Heading 5</h1>
        </div>
      </div>
    </div>
  )
}
