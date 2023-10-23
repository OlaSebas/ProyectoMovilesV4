import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { DOMPurify } from 'dompurify'; // Asegúrate de tener instalada esta biblioteca

@Component({
  selector: 'app-testito-storage',  
  templateUrl: './testito-storage.page.html',
  styleUrls: ['./testito-storage.page.scss'],
})
export interface TabRecord implements OnInit {
    src: string;
    name: string;
    description: string;
    type: string;
    status?: string;
}

  const tabRecords: TabRecord[] = [
    {
      src: 'assets/profile.jpg',
      name: 'James Alexander',
      description: 'Joined 10 minutes ago',
      type: 'user',
      status: 'active'
    },
    {
      src: 'assets/profile-woman.jpg',
      name: 'Lilia Taylor',
      description: 'Joined 30 minutes ago',
      type: 'user',
      status: 'inactive'
    },
    {
      src: 'assets/image.svg',
      name: 'Profile photo',
      description: 'Uploaded 20 minutes ago',
      type: 'file'
    },
    {
      src: 'assets/folder.svg',
      name: 'CV Folder',
      description: 'Created 2 days ago',
      type: 'file'
    },
  ];

const generateTabItems = (elem: HTMLAnchorElement, tabContent: HTMLElement) => {
  const filterName = elem.name;

  const filterFunction = filter[filterName];

  const mappedRecords = tabRecords
    .filter(filterFunction)
    .map((record) => {
      return DOMPurify.sanitize(`<div class="record">
        <div class="avatar__wrapper">
          <img
            src="${record.src}"
            class="avatar avatar--${record.type}"
            alt="Profile"
          >
          ${record.type === 'user' && record.status
            ? `<div class="status">
                <div class="status__inner status__inner--${record.status}">
                </div>
              </div>`
            : ''
          }
        </div>
        <div class="content">
          <div class="title">
            ${record.name}
          </div>
          <div class="description">
            ${record.description}
          </div>
        </div>
      </div>`);
    });

  tabContent.innerHTML = mappedRecords.join('');
};

const allLinks = document.querySelectorAll<HTMLAnchorElement>(".tabs a");
const allTabs = document.querySelectorAll<HTMLElement>(".tab-content");

allLinks.forEach((elem) => {
  elem.addEventListener('click', () => {
    const linkId = elem.id;
    const hrefLinkClick = elem.href;

    allLinks.forEach((link) => {
      if (link.href === hrefLinkClick) {
        link.classList.add("active");
      } else {
        link.classList.remove('active');
      }
    });

    allTabs.forEach((tab) => {
      if (tab.id.includes(linkId)) {
        tab.classList.add("tab-content--active");
        // generate content for tab
        generateTabItems(elem, tab);
      } else {
        tab.classList.remove('tab-content--active');
      }
    });
  });
});
