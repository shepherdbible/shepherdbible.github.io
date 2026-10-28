import type { Page } from '../../types';
import storiesJsonRaw from './data/stories.json';
import './StoriesPage.css';

export interface StoryItem {
    title: string;
    notes: string;
    thumbnail: string;
    link: string;
    group: number | string;
    readonly: boolean;
    row_number: number;
}



export const StoryGroups: Record<number, string> = {
    1: "Muslims",
    2: "Atheists",
    3: "Buddhists",
    4: "Hindus",
    5: "Religious Doctrines",
    6: "The Narrow Path"
};



const storiesJson = storiesJsonRaw as StoryItem[];

export const StoriesPage: Page = {
    render: () => {
        // Group stories by Category Key / Name
        const groupsList = Object.entries(StoryGroups);

        return /* html */ `
     <div class="stories-page-container">      
<!-- Stories Header -->
<header class="stories-header">
    <div class="stories-header-copy">
        <span class="stories-eyebrow">WATCH · LISTEN · REFLECT</span>
        <h1>Testimonies &amp; Stories</h1>
        <p>
            Explore personal testimonies, faith journeys, and stories
            that invite thoughtful reflection.
        </p>
    </div>

    <div class="stories-search">
        

        <div class="stories-search-field">
            <svg class="stories-search-icon"
                 aria-hidden="true"
                 viewBox="0 0 24 24"
                 fill="none">
                <circle cx="11" cy="11" r="7"
                        stroke="currentColor" stroke-width="1.8"/>
                <path d="m16 16 4 4"
                      stroke="currentColor" stroke-width="1.8"
                      stroke-linecap="round"/>
            </svg>

            <input
                type="search"
                id="storiesSearchInput"
                placeholder=" Search stories..."
                autocomplete="off"
            />

            <button
                id="clearSearchBtn"
                class="stories-search-clear"
                type="button"
                aria-label="Clear search"
                title="Clear search"
                hidden>
                <svg viewBox="0 0 24 24" fill="none"
                     aria-hidden="true">
                    <path d="m6 6 12 12M18 6 6 18"
                          stroke="currentColor"
                          stroke-width="1.8"
                          stroke-linecap="round"/>
                </svg>
            </button>
        </div>
    </div>
</header>

<!-- Category Filters -->
<section class="stories-browser" aria-label="Browse stories">
    <div class="stories-browser-heading">
        <h2>Browse by topic</h2>
        <span class="stories-total">
            ${storiesJson.length} stories
        </span>
    </div>

    <nav class="filter-tabs-wrapper" aria-label="Story categories">
        <div class="stories-filter-tabs" id="groupTabsContainer">
            <button class="tab-btn active"
                    type="button"
                    data-group="all"
                    aria-pressed="true">
                <span>All Stories</span>
                <span class="tab-count">${storiesJson.length}</span>
            </button>

            ${groupsList.map(([key, name]) => {
            const count = storiesJson.filter(
                s => String(s.group ?? 0) === key
            ).length;

            return /* html */ `
                    <button class="tab-btn"
                            type="button"
                            data-group="${key}"
                            aria-pressed="false">
                        <span>${name}</span>
                        <span class="tab-count">${count}</span>
                    </button>
                `;
        }).join('')}
        </div>
    </nav>
</section>


                <!-- Stories Grid Output -->
                 
                <div id="storiesGrid" class="story-grid">
                    ${storiesJson.map(story => {
            const groupKey = story.group !== undefined && story.group !== "" ? String(story.group) : "0";
            const groupName = StoryGroups[Number(groupKey)] || "General Stories";
            const youtubeUrl = `https://www.youtube.com/watch?v=${story.link}`;

            return /* html */ `
                            <a 
                                href="${youtubeUrl}" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                class="story-card group" 
                                data-group="${groupKey}"
                                data-search="${(story.title + ' ' + (story.notes || '')).toLowerCase().replace(/"/g, '&quot;')}"
                            >
                                <div class="story-thumbnail-wrapper">
                                    <img 
                                        src="${story.thumbnail}" 
                                        alt="${story.title.replace(/"/g, '&quot;')}" 
                                        loading="lazy" 
                                        onerror="this.onerror=null; this.src='https://img.youtube.com/vi/${story.link}/hqdefault.jpg';"
                                    />
                                    <div class="category-badge">${groupName}</div>
                                    <div class="play-overlay">
                                        <div class="play-button-icon">
                                            <svg class="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="story-content">
                                    <h3 class="story-title" title="${story.title.replace(/"/g, '&quot;')}">${story.title}</h3>${story.notes ? `<p class="story-notes">${story.notes}</p>` : ''}
                                </div>
                            </a>
                        `;
        }).join('')}
                </div>

               
<!-- Empty Search / Filter State -->
<div id="noResultsMessage" class="hidden no-results-message">
    <div class="no-results-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
            <circle cx="10.5" cy="10.5" r="6.5"
                    stroke="currentColor" stroke-width="1.7" />
            <path d="m15.5 15.5 4 4"
                  stroke="currentColor" stroke-width="1.7"
                  stroke-linecap="round" />
        </svg>
    </div>
    <h3>No stories found</h3>
    <p>Try adjusting your filter or search terms.</p>
</div>

            </div>
        `;

    },

    mount: () => {
        const searchInput = document.getElementById('storiesSearchInput') as HTMLInputElement;
        const clearSearchBtn = document.getElementById('clearSearchBtn') as HTMLButtonElement;
        const storyCards = document.querySelectorAll<HTMLElement>('.story-card');
        const tabBtns = document.querySelectorAll<HTMLElement>('.tab-btn');
        const noResultsMessage = document.getElementById('noResultsMessage');

        let activeGroup = 'all';
        let searchQuery = '';

        function filterStories() {
            let visibleCount = 0;

            storyCards.forEach(card => {
                const cardGroup = card.getAttribute('data-group');
                const cardSearchText = card.getAttribute('data-search') || '';

                const matchesGroup = activeGroup === 'all' || cardGroup === activeGroup;
                const matchesSearch = !searchQuery || cardSearchText.includes(searchQuery);

                if (matchesGroup && matchesSearch) {
                    card.classList.remove('hidden');
                    visibleCount++;
                } else {
                    card.classList.add('hidden');
                }
            });

            if (noResultsMessage) {
                if (visibleCount === 0) {
                    noResultsMessage.classList.remove('hidden');
                } else {
                    noResultsMessage.classList.add('hidden');
                }
            }
        }

        // Tab click handling
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                activeGroup = btn.getAttribute('data-group') || 'all';
                filterStories();
            });
        });

        // Search input handling
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                searchQuery = (e.target as HTMLInputElement).value.toLowerCase().trim();

                if (clearSearchBtn) {
                    if (searchQuery.length > 0) {
                        clearSearchBtn.classList.remove('hidden');
                    } else {
                        clearSearchBtn.classList.add('hidden');
                    }
                }

                filterStories();
            });
        }

        // Clear search button handling
        if (clearSearchBtn && searchInput) {
            clearSearchBtn.addEventListener('click', () => {
                searchInput.value = '';
                searchQuery = '';
                clearSearchBtn.classList.add('hidden');
                searchInput.focus();
                filterStories();
            });
        }
    }
};