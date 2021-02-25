import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { Layout } from '@/root/components/Layout'
import { screen } from '@/root/styles/media'

const recipes = [
  {
    id: 1,
    title: 'Svako Jutro Jedno Jaje Organizmu Snagu Daje',
    src: '/images/dish.webp',
  },
  {
    id: 2,
    title: 'Osveta je Najbolje Servirana Hladna',
    src: '/images/dish.webp',
  },
  {
    id: 3,
    title: 'Jelo Utopljeno u Umaku, ti si Idući',
    src: '/images/dish.webp',
  },
  {
    id: 4,
    title: 'Svako Jutro Jedno Jaje Organizmu Snagu Daje',
    src: '/images/dish.webp',
  },
  {
    id: 5,
    title: 'Osveta je Najbolje Servirana Hladna',
    src: '/images/dish.webp',
  },
  {
    id: 6,
    title: 'Jelo Utopljeno u Umaku, ti si Idući',
    src: '/images/dish.webp',
  },
]

const search = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },
}

const cards = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.4,
      staggerChildren: 0.3,
    },
  },
}

const card = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

const Title = styled.h2`
  transition: color 1s;
`

const Search = styled(motion.div)`
  grid-area: search;
  padding: var(--spacing-32);
  background-color: var(--color-secondary-bg);
  border-radius: var(--radius-base);
  box-shadow: var(--shadow-sm);
  transition: background-color 1s;
`

const SearchBar = styled.div`
  position: relative;
  margin-top: var(--spacing-32);
`

const SearchLabel = styled.label`
  display: none;
`

const SearchIcon = styled.svg`
  position: absolute;
  top: var(--spacing-24);
  left: var(--spacing-24);
  color: var(--color-input-text);
`

const SearchInput = styled.input`
  width: 100%;
  margin-top: var(--spacing-8);
  padding: var(--spacing-16);
  padding-left: var(--spacing-64);
  font-family: inherit;
  font-size: 16px;
  color: var(--color-text);
  background-color: var(--color-input-bg);
  border: 1px solid var(--color-input-border);
  border-radius: var(--radius-base);
  transition: width 0.3s, color 1s, background-color 1s;

  &:focus {
    width: 100%;
  }

  ${screen.md} {
    width: 300px;
    font-size: 18px;
  }
`

const RecipesCards = styled(motion.main)`
  grid-area: recipes;
  display: grid;
  gap: var(--spacing-16);

  ${screen.md} {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
`

const RecipeCard = styled(motion.article)`
  height: 280px;
  position: relative;
  transition: scale 0.3s;

  &:hover {
    scale: 1.04;
    box-shadow: var(--shadow-lg);
    z-index: 1;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 1;
    background: var(--color-overlay-bg);
    transition: opacity 0.3s;
  }

  &:hover::before {
    opacity: 0;
  }
`

const RecipeCardTitle = styled.h3`
  max-width: 340px;
  position: absolute;
  bottom: var(--spacing-16);
  left: var(--spacing-16);
  color: var(--color-text-on-dark-bg);
  text-transform: capitalize;
`

const RecipeCardImage = styled.img`
  object-fit: cover;
`

export function Recipes() {
  const [searchTerm, setSearchTerm] = React.useState<string>('')
  const [searchResults, setSearchResults] = React.useState<
    {
      id: number
      title: string
      src: string
    }[]
  >()

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTimeout(() => setSearchTerm(e.target.value), 1000)
  }

  React.useEffect(() => {
    const results = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setSearchResults(results)
  }, [searchTerm])

  return (
    <Layout page="recipes">
      <Search variants={search} initial="hidden" animate="show">
        <Title>Recepti</Title>

        <SearchBar>
          <SearchLabel aria-hidden="false" htmlFor="recipe-search">
            Search
          </SearchLabel>
          <SearchIcon
            height="24"
            width="24"
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M508.875 493.792L353.089 338.005c32.358-35.927 52.245-83.296 52.245-135.339C405.333 90.917 314.417 0 202.667 0S0 90.917 0 202.667s90.917 202.667 202.667 202.667c52.043 0 99.411-19.887 135.339-52.245l155.786 155.786a10.634 10.634 0 007.542 3.125c2.729 0 5.458-1.042 7.542-3.125 4.166-4.167 4.166-10.917-.001-15.083zM202.667 384c-99.979 0-181.333-81.344-181.333-181.333S102.688 21.333 202.667 21.333 384 102.677 384 202.667 302.646 384 202.667 384z"
            />
          </SearchIcon>
          <SearchInput
            onChange={handleChange}
            type="text"
            id="recipe-search"
            name="recipe-search"
            placeholder="Pretražite recepte"
          />
        </SearchBar>
      </Search>

      {!searchResults || searchResults.length < 1 ? (
        <h2>No recipes to show.</h2>
      ) : (
        <RecipesCards variants={cards} initial="hidden" animate="show">
          {searchResults?.map(({ id, title, src }) => (
            <Link key={id} href="#">
              <a>
                <RecipeCard variants={card}>
                  <RecipeCardTitle>{title}</RecipeCardTitle>
                  <RecipeCardImage src={src} alt={title} />
                </RecipeCard>
              </a>
            </Link>
          ))}
        </RecipesCards>
      )}
    </Layout>
  )
}
