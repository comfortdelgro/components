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

export const TitleContainer = styled('div', () => ({
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

const SliderImage = styled('div', ({src}) => ({
  width: '100%',
  height: '100%',
  borderRadius: '10px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: `url(${src})`,
}))

export interface CarouselProps {
  slides: []
}

export const Carousel: React.FC<CarouselProps> = ({slides, children}) => {
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
        <StyledChevronRight onClick={goToPrevious} size={45} color='primaryB' />
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
