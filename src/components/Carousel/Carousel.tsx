import {styled} from 'baseui'
import {ChevronLeft, ChevronRight} from 'baseui/icon'
import * as React from 'react'
import {DottedPagination} from '../Paginations'

const StyledChevronRight = styled(ChevronRight, () => ({
  position: 'absolute',
  top: '50%',
  transform: 'translate(0, -50%)',
  right: '32px',
  color: '#fff',
  zIndex: 1,
  cursor: 'pointer',
}))

const StyledChevronLeft = styled(ChevronLeft, () => ({
  position: 'absolute',
  top: '50%',
  transform: 'translate(0, -50%)',
  left: '32px',
  color: '#fff',
  zIndex: 1,
  cursor: 'pointer',
}))

const Container = styled('div', () => ({
  position: 'relative',
  width: '100%',
  height: '100%',
}))

const TitleContainer = styled('div', () => ({
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  left: '104px',
  top: '50%',
  transform: 'translateY(-50%)',
}))

const PaginationContainer = styled('div', () => ({
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  bottom: '40px',
  left: '104px',
}))

const SliderImage = styled('img', ({src}: {src: string}) => ({
  width: '100%',
  height: '100%',
  borderRadius: '10px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: `url(${src})`,
}))

export interface Props {
  slides: {url: string}[]
}

export const Carousel: React.FC<Props> = ({slides, children}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }
  const length = slides.length

  return (
    <Container>
      <div>
        {/* @ts-ignore */}
        <StyledChevronRight onClick={goToPrevious} size={45} color='primaryB' />
        {/* @ts-ignore */}
        <StyledChevronLeft onClick={goToNext} size={45} color='primaryB' />
      </div>
      <SliderImage src={slides[currentIndex].url} />
      {children}
      <PaginationContainer>
        <DottedPagination
          index={currentIndex}
          length={length}
          onChange={(index) => goToSlide(index)}
        />
      </PaginationContainer>
    </Container>
  )
}
