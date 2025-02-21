import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';
import './style.css';

import chatAvatar1 from '../static/img/chat-avatar-1.jpg';
import chatAvatar2 from '../static/img/chat-avatar-2.jpg';
import chatAvatar3 from '../static/img/chat-avatar-3.png';
import chatImg from '../static/img/chat-img.png';

const pages = {
    'nav': [ Pages.NavigationPage ],
    'login': [ Pages.LoginPage ],
    'registration': [ Pages.RegistrationPage ],
    'chatList': [ Pages.ChatListPage, {
        chats: [
            {name: 'Илья', avatar: chatAvatar1, preview: 'Друзья! У меня для вас особенный выпуск новостей!', lastUpdateDate: '15:12', unreadCount: '4'},
            {name: 'Вадим', avatar: chatAvatar2, preview: 'Изображение', lastUpdateDate: '10:49', unreadCount: '2'},
            {name: 'Киноклуб', avatar: chatAvatar3, preview: 'Вы: стикер', lastUpdateDate: '12:00'},
        ],
        showDialog: false,
        activeChat: null
    }],
    'openedChat': [ Pages.OpenedChatPage, {
        chats: [
            {name: 'Илья', avatar: chatAvatar1, preview: 'Друзья! У меня для вас особенный выпуск новостей!', lastUpdateDate: '15:12', unreadCount: '4'},
            {name: 'Вадим', avatar: chatAvatar2, preview: 'Изображение', lastUpdateDate: '10:49', unreadCount: '2', active: true},
            {name: 'Киноклуб', avatar: chatAvatar3, preview: 'Вы: стикер', lastUpdateDate: '12:00'},
        ],
        showDialog: false,
        activeChat: 2,
        avatar: chatAvatar2,
        img: chatImg,
        imgAlt: 'Камера',
        activeOptionsDropdown: true,
        activeAttachDropdown: true,
        chatOptions: [
            {icon: "add", label: "Добавить пользователя"},
            {icon: "remove", label: "Удалить пользователя"}
        ],
        attachOptions: [
            {icon: "attach-media", label: "Фото или видео"},
            {icon: "attach-file", label: "Файл"},
            {icon: "attach-location", label: "Локация"}
        ]
    }],
    'addUser': [ Pages.AddUserPage, {
        chats: [
            {name: 'Илья', avatar: chatAvatar1, preview: 'Друзья! У меня для вас особенный выпуск новостей!', lastUpdateDate: '15:12', unreadCount: '4'},
            {name: 'Вадим', avatar: chatAvatar2, preview: 'Изображение', lastUpdateDate: '10:49', unreadCount: '2', active: true},
            {name: 'Киноклуб', avatar: chatAvatar3, preview: 'Вы: стикер', lastUpdateDate: '12:00'},
        ],
        showDialog: true,
    }],
    'profile': [ Pages.ProfilePage, {
        profileData: {
            email: "pochta@yandex.ru",
            login: "ivanivanov",
            name: "Иван",
            surname: "Иванов",
            chatName: "Иван",
            phone: "+7 (909) 967 30 30",
            avatar: chatAvatar1
        }
    }],
    'profileEdit': [ Pages.ProfileEditPage, {
        profileData: {
            email: "pochta@yandex.ru",
            login: "ivanivanov",
            name: "Иван",
            surname: "Иванов",
            chatName: "Иван",
            phone: "+7 (909) 967 30 30",
            avatar: chatAvatar1
        }
    }],
    'profileChangeAvatar': [ Pages.ProfileChangeAvatarPage, {
        profileData: {
            avatar: chatAvatar1
        },
        showDialog: true,
    }],
    'profileChangePassword': [ Pages.ProfileChangePasswordPage, {
        profileData: {
            avatar: chatAvatar1
        }
    }],
    'error404': [ Pages.Error404Page ],
    'error5xx': [ Pages.Error5xxPage ]
};

Object.entries(Components).forEach(([ name, template ]) => {
    Handlebars.registerPartial(name, template);
});

function navigate(page: string) {
    //@ts-ignore
    const [ source, context ] = pages[page];
    const container = document.getElementById('app')!;

    const templatingFunction = Handlebars.compile(source);
    container.innerHTML = templatingFunction(context);
}

document.addEventListener('DOMContentLoaded', () => navigate('nav'));

document.addEventListener('click', e => {
    //@ts-ignore
    const page = e.target.getAttribute('page');
    if (page) {
        navigate(page);

        e.preventDefault();
        e.stopImmediatePropagation();
    }
});
