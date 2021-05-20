import React, { useState } from 'react'
import styles from '../styles/AddEvent.module.css'
import { useApi, useLocations, useCategories } from '@nationskollen/sdk'
import { useAsyncCallback } from 'react-async-hook'

if (typeof window !== 'undefined') {
    console.log('pls not Error!')
    const form = document.querySelector('form')
} else {
    console.log('Error!')
}

const AddEvent = (props) => {
    const { data, categories } = props;
    const api = useApi();
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user)

    const locations = useLocations(data.oid).data;
    
    const [addEvent, setAddEvent] = useState({
        name: '',
        only_members: false,
        only_students: false,
        occurs_at: '',
        ends_at: '',

        // TODO: short and long
        short_description: '',
        long_description: 'hejsdajiahsdioah',
        
        // TODO: location, dropdown
        location_id: 1,

        // TODO: category
        category_id: 1,
        category: { id: '', name: '' },
        
        // TODO: upload image
        cover_img_src: ''
    });
    console.log(addEvent)

    const createEvent = useAsyncCallback(() => api.events.create( data.oid, addEvent ));


    //update data
    const handleParam = () => (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAddEvent((prevState) => ({ ...prevState, [name]: value }))
        //console.log(addEvent)
    }

    const handleCheckbox = () => (e) => {
        const name = e.target.name;
        setAddEvent((prevState) => ({ ...prevState, [name]: !(addEvent[name]) }) )
    } 

    const handleCategory = () => (e) => {
        const item = JSON.parse(e.target.value);
        console.log(item)
        setAddEvent((prevState) => ({ ...prevState, category_id: item.id, category: item }) )
    }

    // Form Submit function
    const formSubmit = () => {
        createEvent.execute();
        
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}> Add Event</h2>
                    <span>Start Time</span>
                    <input
                        type="datetime-local"
                        name="occurs_at"
                        required
                        value={addEvent.occurs_at}
                        onChange={handleParam()}
                    />
                <div id="">
                    <span>End Time</span>
                    <input
                        type="datetime-local"
                        name="ends_at"
                        required
                        placeholder="Ends at"
                        value={addEvent.ends_at}
                        onChange={handleParam()}
                    />
                </div>
                <div id="">
                    <span>Title</span>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Title"
                        value={addEvent.name}
                        onChange={handleParam()}
                    />
                </div>
                <div id="">
                    <span>Description</span>
                    <textarea
                        rows="5"
                        name="short_description"
                        required
                        placeholder="Description"
                        value={addEvent.short_description}
                        onChange={handleParam()}
                    ></textarea>
                </div>
                {/* <div id="">
                    <span>Tags</span>
                    <input
                        type="text"
                        name="tags"
                        placeholder="Tags"
                        value={addEvent.tag}
                        onChange={handleParam()}
                    />
                </div> */}
                {/* <div id="">
                    <span>Location</span>
                    <input
                        type="text"
                        name="location"
                        required
                        placeholder="Name"
                        value={query.name}
                        onChange={handleParam()}
                    />
                </div> */}
                <div id="">
                    <span>Type of event</span>
                    <select onChange={handleCategory()}>
                        {/* TODO Fix setState on selection */}
                        {categories.map( (item) => <option value={JSON.stringify(item)} >{item.name}</option>)}
                        {/* <option value="Frukost">Frukost</option>
                        <option value="Brunch">Brunch</option>
                        <option value="Fika">Fika</option>
                        <option value="Sport">Sport</option>
                        <option value="Restaurang">Restaurang</option>
                        <option value="Pub">Pub</option>
                        <option value="Kultur">Kultur</option>
                        <option value="Gasque">Gasque</option>
                        <option value="Släpp">Släpp</option>
                        <option value="Klubb">Klubb</option>
                        <option value="Konsert">Konsert</option>
                        <option value="Övrigt">Övrigt</option> */}
                    </select>
                </div>
                <div id="">
                    <span>Nationcard</span>
                    <input 
                        type="checkbox"
                        name="only_students"
                        onChange={handleCheckbox()} 
                    />
                </div>
                <div id="">
                    <span>Only members</span>
                    <input 
                        type="checkbox"
                        name="only_members"
                        onChange={handleCheckbox()} 
                    />
                </div>

                <div id="">
                    <span>Image</span>
                    <input 
                        type="file"
                        name="cover_img_src"
                        placeholder="Tags"
                        value={addEvent.cover_img_src}
                        onChange={handleParam()} 
                        className={styles.custom_file_input} 
                    />
                </div>

                <input type="button" className={styles.submit} onClick={formSubmit} />
        </div>
    )
}


export default AddEvent
