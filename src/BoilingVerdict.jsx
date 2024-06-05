function BoilingVerdict({ celsius }) {
    if (celsius >= 100) {
        return <p>물이 끓습니다.</p>;
    }
    return <p>물이 끓지 않습니다.</p>;
}

export default BoilingVerdict;
