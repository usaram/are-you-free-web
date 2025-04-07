/**
 * 指定されたY座標をコンテナ内の範囲に制限して返します。
 *
 * @param y - 制限対象のY座標
 * @param containerRef - コンテナ要素の参照 (HTMLDivElement)
 * @returns コンテナ内に制限されたY座標
 */
export function CalculateYInContainer(
	y: number,
	containerRef: HTMLDivElement | null,
): number {
	// コンテナが存在しない場合はデフォルト値として 0 を返す
	if (!containerRef) {
		return 0
	}

	// コンテナの情報を取得 (位置とサイズ)
	const containerRect = containerRef.getBoundingClientRect()

	// Y座標をコンテナの範囲内に制限
	// - コンテナの上端 (containerRect.top) より小さい場合は上端に制限
	// - コンテナの下端 (containerRect.bottom) より大きい場合は下端に制限
	y = Math.max(containerRect.top, Math.min(y, containerRect.bottom))

	// 制限されたY座標を返す
	return y
}
