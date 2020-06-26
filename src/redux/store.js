import profileReducer from "./profile-reduce";
import dialogsReducer from "./dialogs-reduce";

let store = {
     _callSubscriber  ()  {
        console.log('state');
    },
     _state : {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'how are you', likesCount: 20}
            ],
            newPostText: 'text',
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'how are you'},
                {id: 3, message: 'Bay'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            dialogs: [
                {
                    id: 1,
                    name: 'Alina',
                    src: 'data:image/jpeg;base64,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'
                },
                {
                    id: 2,
                    name: 'Dimych',
                    src: 'https://mymodernmet.com/wp/wp-content/uploads/2018/10/Mou-Aysha-portrait-photography-3.jpg'
                },
                {
                    id: 3,
                    name: 'Andrey',
                    src: 'data:image/jpeg;base64,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'
                },
                {
                    id: 4,
                    name: 'Valera',
                    src: 'https://upload.wikimedia.org/wikipedia/ru/thumb/8/82/Greyson_Chance_Portraits_2019.png/274px-Greyson_Chance_Portraits_2019.png'
                },
                {
                    id: 5,
                    name: 'Viktor',
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlI17hBJZBEmsfhRIHyot6T8Pjbr07OAkrzvFXzEw83mV4CyFU&usqp=CAU'
                }
            ],
            newMessageBody: ''


        },
        sidebar: {
            friends: [
                {
                    id: 3,
                    name: 'Andrey',
                    src: 'data:image/jpeg;base64,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'
                },
                {
                    id: 4,
                    name: 'Valera',
                    src: 'https://upload.wikimedia.org/wikipedia/ru/thumb/8/82/Greyson_Chance_Portraits_2019.png/274px-Greyson_Chance_Portraits_2019.png'
                },
                {
                    id: 5,
                    name: 'Viktor',
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlI17hBJZBEmsfhRIHyot6T8Pjbr07OAkrzvFXzEw83mV4CyFU&usqp=CAU'
                }

            ]
        }
    },
    getState () {
         return this._state;
    },
    subscribe  (observer)  {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}


export default store;