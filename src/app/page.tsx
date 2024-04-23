export default function Home() {
  return (
    <main className="flex flex-col justify-between p-24">
      <div className="flex flex-col text-xl pb-7 items-center" id="text">
        <h1 className="font-bold">Text</h1>
        <p>This is an example text</p>
      </div>
      <div className="font-bold text-xl" id="heading">
        <h1 className="pb-5">Heading</h1>
        <h1 className="pb-5">Heading1</h1>
        <h2 className="pb-5">Heading2</h2>
        <h3 className="pb-5">Heading3</h3>
        <h4 className="pb-5">Heading4</h4>
        <h5 className="pb-5">Heading5</h5>
        <h6 className="pb-5">Heading6</h6>
      </div>
      <div id="paragraph" className="flex flex-col pb-11 text-xl">
        <h1 className="flex pb-5 font-bold text-xl justify-center">Paragraph</h1>
        <p>A paragraph (from the Greek paragraphs, “to write beside” or “written beside”) is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Although not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.</p>
      </div>
      <div className="flex font-bold text-xl">
       <blockquote id="blockquotes" >
        <p>This is an example of a blockquotes</p>
      </blockquote> 
      </div>
    </main>
  );
}
