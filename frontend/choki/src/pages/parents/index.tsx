import Image from 'next/image';
import dog_character from '@/assets/icons/dog_character.svg';
import code_information from '@/assets/icons/cod-information.svg';
import child_profile from '@/assets/icons/child_profile.svg';
import map_icon_blurry from '@/assets/icons/map_icon_blurry.svg';
import Link from 'next/link';
import { useState } from 'react';
import DogCharacter from '@/assets/icons/dog_character.svg';
import CommonModal from '@/components/Common/Modal';
import CommonButton from '@/components/Common/Button';
const Toast = ({ message }: { message: string }) => (
	<div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 animate-fade-up">
		<div className="bg-black bg-opacity-80 text-white px-6 py-3 rounded-full shadow-lg">
			{message}
		</div>
	</div>
);
export default function ParentPages() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [inviteCode] = useState('123456');
	const [showToast, setShowToast] = useState(false);
	const handleInviteCodeModal = () => {
		setIsModalOpen(true);
	};
	const handleCloseModal = () => {
		setIsModalOpen(false);
	};
	const handleCopyCode = async () => {
		try {
			await navigator.clipboard.writeText(inviteCode);
			setShowToast(true);
			setTimeout(() => {
				setShowToast(false);
			}, 2000);
		} catch (err) {
			console.error('복사 실패:', err);
		}
	};

	return (
		<div className="flex flex-col w-full max-w-md mx-auto bg-light_yellow background min-h-screen">
			{/* 안내 */}
			<div className="relative w-full h-[190px] rounded-b-3xl bg-light_yellow_dark shadow-xl mb-4">
				<h1 className="text-2xl font-normal mt-14 ml-8">
					안녕하세요 민주님,
					<br />
					오늘도 아이들과 함께 파이팅!
				</h1>
				<Image
					src={dog_character}
					alt="dog_character"
					className="absolute right-4 top-14 px-1 translate-y-1/2"
				/>
				<div className="absolute top-14 right-2">
					<button onClick={handleInviteCodeModal}>
						<Image src={code_information} alt="code_information" />
					</button>
				</div>
			</div>

			{/* 내용 */}
			<div className="flex flex-col justify-center items-center gap-4 mt-12">
				{/* 아이 선택 */}
				<div className="w-[350px] h-[280px] bg-white rounded-3xl shadow-sm border-4 border-light_yellow_side mb-5">
					<h2 className="text-lg font-bold mt-8 ml-7 mb-4">
						오늘은 어떤 아이에게
						<br />
						미션을 부여하실건가요?
					</h2>
					<div className="flex justify-center gap-16">
						<div className="flex flex-col items-center">
							<Image src={child_profile} alt="child_profile" />
							<p className="text-sm mt-2">여준이는 심부름왕</p>
							<p className="text-sm font-bold mt-1">Lv.10</p>
						</div>
						<div className="flex flex-col items-center">
							<Image src={child_profile} alt="child_profile" />
							<p className="text-sm mt-2">장덕동 심부름왕</p>
							<p className="text-sm font-bold mt-1">Lv.5</p>
						</div>
					</div>
				</div>

				{/* 경로 등록하기 */}
				<Link href="parents/route/create">
					<div className="relative w-[350px] h-[190px] bg-white p-6 rounded-3xl shadow-sm border-4 border-light_blue_side">
						<h2 className="text-xl font-bold mb-2 mt-4 relative z-10">
							경로 등록하기
						</h2>
						<p className="text-md text-gray-600 relative z-10">
							아이에게 심부름을 시킬
							<br />
							경로를 미리 등록해주세요!
						</p>
						<div className="absolute right-0 bottom-0">
							<Image
								src={map_icon_blurry}
								alt="map_icon_blurry"
								className="opacity-50"
							/>
						</div>
					</div>
				</Link>
			</div>

			{/* Modal */}
			{isModalOpen && (
				<CommonModal onClose={handleCloseModal} isOpen={true} size="medium">
					<div className="flex flex-col items-center gap-4 mt-14">
						<h4 className="text-2xl font-bold">초대 코드를 공유해주세요!</h4>
						<div className="w-32 h-32 relative mt-8">
							<Image
								src={DogCharacter}
								alt="강아지 캐릭터"
								layout="fill"
								objectFit="contain"
							/>
						</div>
						<div className="relative mb-8">
							<h1 className="text-4xl">{inviteCode}</h1>
						</div>
						<CommonButton
							size="medium"
							color="orange"
							onClick={handleCopyCode}
							text={'복사하기'}
						/>
					</div>
				</CommonModal>
			)}
			{showToast && <Toast message="복사되었습니다!" />}
		</div>
	);
}