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
      <div className="flex pb-11 font-bold text-xl">
       <blockquote id="blockquotes" >
        <p>This is an example of a blockquotes</p>
      </blockquote> 
      </div>

      <div id="lists" className="flex flex-col pb-11 text-xl">
        <div className="flex justify-center">
          <h1 className="font-bold text-xl pb-5">List</h1>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row">

            <div className="pr-11">
             <dl>
              <h1 className="font-bold text-xl pb-5">Definition list</h1>
              <dt>Definition List Title 1</dt>
              <dd className="pb-11">This is a definition list division 1.</dd>
              <dt>Definition List Title 2</dt>
              <dd>This is a definition list division 2.</dd>
            </dl> 
            </div>
          
            <div className="pr-11">
              <ol className="list-decimal">
                <h1 className="font-bold text-xl pb-5">Ordered list</h1>
                <li>This is a list item in an ordered list.</li>
                <li>This is a list item in an ordered list.</li>
                <li>This is a list item in an ordered list.</li>
              </ol>
            </div>

            <div className="pr-11">
              <ul className="list-disc">
                <h1 className="font-bold text-xl pb-5">Unordered List</h1>
                <li>This is a list item in an unordered list.</li>
                <li>This is a list item in an unordered list.</li>
                <li>This is a list item in an unordered list.</li>
              </ul>
            </div>

            <div>
              <ol className="list-decimal">
                <h1 className="font-bold text-xl pb-5">Ordered List with class</h1>
                <li>This is a list item in an unordered list.</li>
                <li>This is a list item in an unordered list.</li>
                <li>This is a list item in an unordered list.</li>
              </ol>
            </div>
            
          </div>
        </div>
        


      </div>

    </main>
  );
}
