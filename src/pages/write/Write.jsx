import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img
                className= "writeImg" 
                src="https://ifoodreal.com/wp-content/uploads/2020/11/Beets-with-Goat-Cheese-and-Pine-Nuts-709x1024.jpg" 
                alt=""/>
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                     <i class="fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea 
                        placeholder="Start writing..." 
                        type="text" 
                        className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}