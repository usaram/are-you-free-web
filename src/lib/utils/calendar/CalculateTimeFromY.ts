export function CalculateTimeFromY(
	minY: number,
	maxY: number,
	containerRef: HTMLDivElement | null,
	quarterlyHourTimeSlots: string[],
): [string, string] {
	// 引数がnullまたはundefinedの場合、デフォルト値を返す
	if (!containerRef) {
		return ['00:00', '00:00']
	}

	// コンテナの各種情報を取得
	const containerRect = containerRef.getBoundingClientRect()
	const containerHeight = containerRect.height
	const containerTop = containerRect.top

	// コンテナ内のY座標を取得
	const startY = minY - Math.floor(containerTop)
	const endY = maxY - Math.floor(containerTop)
	// コンテナを15分刻みの時間スロットの数で割った数
	const lastIndexInSlots = quarterlyHourTimeSlots.length - 1

	// Y座標からスロット内のインデックスを計算
	// 開始位置は端数を切り捨て、終了位置は端数を切り上げ
	const startIndexInSlots = Math.floor(
		startY / (Math.floor(containerHeight) / lastIndexInSlots),
	)
	const endIndexInSlots = Math.ceil(
		endY / (Math.floor(containerHeight) / lastIndexInSlots),
	)

	// 開始位置と終了位置が同じ場合、終了位置は開始位置+1にする
	if (startIndexInSlots === endIndexInSlots) {
		return [
			quarterlyHourTimeSlots[startIndexInSlots],
			quarterlyHourTimeSlots[startIndexInSlots + 1],
		]
	}

	// 開始位置がスロットの範囲を超えた場合、最終15分スロットを返す
	if (startIndexInSlots > lastIndexInSlots) {
		return [
			quarterlyHourTimeSlots[lastIndexInSlots - 1],
			quarterlyHourTimeSlots[lastIndexInSlots],
		]
	}

	// 終了位置がスロットの範囲を超えた場合、終了位置は最終スロットにする
	if (endIndexInSlots > lastIndexInSlots) {
		return [
			quarterlyHourTimeSlots[startIndexInSlots],
			quarterlyHourTimeSlots[lastIndexInSlots],
		]
	}

	return [
		quarterlyHourTimeSlots[startIndexInSlots],
		quarterlyHourTimeSlots[endIndexInSlots],
	]
}
