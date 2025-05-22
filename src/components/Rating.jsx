const Rating = ({currentRating}) => (
    <div className="flex items-center space-x-1 mb-5">
        {Array(currentRating).fill(0).map((_, i) =>
            <img key={i} src="/assets/star.svg" width="14" height="14" alt=""/>
        )}
    </div>
)

export default Rating;
