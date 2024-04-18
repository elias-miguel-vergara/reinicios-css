import "./page.css";

export default function HeaderPage() {
    return (
        <>
            <div className="flex flex-col">
              <h1 className="font-bold text-3xl">HTML5 Test Page</h1>
                <br />
              <p>This is a test page filled with common HTML elements to be used to provide visual feedback whilst building CSS systems and frameworks.</p>
                <br />
              <p>(The next set of links lead to each section.)</p>
            </div>
            
            <ul>
            <li>
              <a href="#text">Text</a>
              <ul>
                <li><a href="">Headings</a></li>
                <li><a href="">Paragraphs</a></li>
                <li><a href="">Blockquotes</a></li>
                <li><a href="">Lists</a></li>
                <li><a href="">Horizontal rules</a></li>
                <li><a href="">Tabular data</a></li>
                <li><a href="">Code</a></li>
                <li><a href="">Inline elements</a></li>
              </ul>
            </li>
            <li>
              <a href="">Embedded content</a>
              <ul>
                <li><a href="">Images</a></li>
                <li><a href="">Audio</a></li>
                <li><a href="">Video</a></li>
                <li><a href="">Canvas</a></li>
                <li><a href="">Meter</a></li>
                <li><a href="">Progress</a></li>
                <li><a href="">Inline SVG</a></li>
                <li><a href="">IFrames</a></li>
              </ul>
            </li>
            <li>
              <a href="">Form elements</a>
              <ul>
                <li><a href="">Input fields</a></li>
                <li><a href="">Select menus</a></li>
                <li><a href="">Checkboxes</a></li>
                <li><a href="">Radio buttons</a></li>
                <li><a href="">Textareas</a></li>
                <li><a href="">HTML5 inputs</a></li>
                <li><a href="">Action buttons</a></li>
              </ul>
            </li>
          </ul>
        </>
    );
}