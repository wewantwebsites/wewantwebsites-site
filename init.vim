set nocompatible            " disable compatibility to old-time vi 
filetype plugin indent on   " allow auto-indenting depending on file type 
syntax on                   " syntax highlighting 
set mouse=a                 " enable mouse click 
set clipboard=unnamedplus   " using system clipboard 
set cursorline              " highlight current cursorline 
set ttyfast                 " Speed up scrolling in Vim 
set showmatch               " show matching 
set ignorecase              " case insensitive 
set mouse=v                 " middle-click paste with 
set hlsearch                " highlight search 
set incsearch               " incremental search
set tabstop=4               " number of columns occupied by a tab 
set softtabstop=4           " see multiple spaces as tabstops so <BS> does the right thing
set expandtab               " converts tabs to white space
set shiftwidth=4            " width for autoindents
set autoindent              " indent a new line the same amount as the line just typed
set number                  " add line numbers
set relativenumber          " relative line numbers, distance from current line
set wildmode=longest,list   " get bash-like tab completions
set cc=120                   " set an 80 column border for good coding style

set splitright
set splitbelow

call plug#begin()
    Plug 'junegunn/vim-easy-align'
    Plug 'hrsh7th/nvim-cmp' 
    Plug 'vim-airline/vim-airline' 
    Plug 'neovim/nvim-lspconfig' 
    Plug 'tpope/vim-fugitive' 
    Plug 'sainnhe/gruvbox-material' 
    
    " Language Server
    Plug 'neoclide/coc.nvim', {'branch': 'release'}
    Plug 'jparise/vim-graphql'
    Plug 'leafgarland/typescript-vim'
    Plug 'othree/html5.vim'
    Plug 'pangloss/vim-javascript' 
    Plug 'evanleck/vim-svelte', {'branch': 'main'} 

    " Telescope
    Plug 'nvim-lua/plenary.nvim' 
    Plug 'nvim-telescope/telescope.nvim' 
    Plug 'nvim-telescope/telescope-file-browser.nvim'
call plug#end()

let g:svelte_preprocessors = ['typescript']
let g:airline_theme = 'gruvbox_material'

colorscheme gruvbox-material 

" Set leader to <space>
let mapleader = ' '

" Split Panes
nnoremap <leader>pv :Vex<CR>
nnoremap <leader>ph :Hex<CR>

" Source nvim
nnoremap <leader><CR> :so ~/.config/nvim/init.vim<CR>

" Exit INSERT_MODE
inoremap jh <Esc>

" Explore .
nnoremap <leader>ex :Explore<CR>

" Plug Install
nnoremap <leader>in :PlugInstall<CR>

" Find files using Telescope CLI sugar
nnoremap <leader>ff <cmd>Telescope find_files<CR>
nnoremap <leader>fg <cmd>Telescope live_grep<CR>
nnoremap <leader>fb <cmd>Telescope file_browser<CR>
nnoremap <leader>fh <cmd>Telescope help_tags<CR>

" CoC
inoremap <silent><expr> <tab> coc#pum#visible() ? coc#pum#confirm() : "\<CR>"

lua << EOF
    require('telescope').setup{
        defaults = {
            file_ignore_patterns = { "^./git/", "node_modules/", "^vendor/", ".cache/", ".tmp/", "build/", "dist/" }
        },
    }
    require('telescope').load_extension "file_browser"
EOF
