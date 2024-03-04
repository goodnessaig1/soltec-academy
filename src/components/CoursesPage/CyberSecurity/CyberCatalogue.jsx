import LightGradient from '../../../assets/light-gradient.svg';
import RedCheck from '../../../assets/red-check.svg';
import BlueCheck from '../../../assets/blue-check.svg';
import YellowCheck from '../../../assets/yellow-check.svg';

const CyberCatalogue = () => {
  return (
    <div className='w-full'>
      <div className='productdesign_container'>
        <div className='flex flex-col lg:flex-row h-[669px] lg:h-[417px]  mt-[140px] w-full'>
          <div className='flex-[0.23] flex flex-row items-center justify-center lg:justify-start '>
            <h1 className='font-[600] text-[26px] leading-[32px] text-lightGray2'>
              What you <br />
              will learn <br />
              in <span className='text-[#fff]'>months</span>
            </h1>
            <h1 className='text-[114px] leading-[136px] font-[700] text-[#fff]'>
              3
            </h1>
            <div className='absolute ml-[-134px] mt-[-60px]'>
              <img src={LightGradient} alt='' />
            </div>
          </div>
          <div className='flex-[0.77] w-full mt-[54px] lg:mt-[0] rounded-[24px] sm:h-[693px] px-[24px] lg:px-[48px] product_cards'>
            <div className='grid grid-cols-1 lg:grid-cols-2  gap-[12px] lg:gap-y-[18px] lg:gap-y-[20px] lg:gap-x-[45px]'>
              <div className='flex flex-row gap-[18px] items-center'>
                <img src={RedCheck} alt='' />
                <div className='flex flex-col text-[14px] text-[#fff] leading-[21px]'>
                  <h1 className='font-[700] '>Network Security</h1>
                  <span className='font-[400]'>
                    Understanding how to safeguard networks with firewalls,
                    secure protocols, and intrusion detection systems.
                  </span>
                </div>
              </div>
              <div className='flex flex-row  gap-[18px] items-center'>
                <img src={RedCheck} alt='' />
                <div className='flex flex-col text-[14px] text-[#fff] leading-[21px]'>
                  <h1 className='font-[700] '>
                    Cyber Threats and Attack Vectors
                  </h1>
                  <span className='font-[400]'>
                    Identifying and mitigating various cyber threats like
                    malware, phishing, and social engineering attacks.
                  </span>
                </div>
              </div>
              <div className='flex flex-row gap-[18px] items-center'>
                <img src={BlueCheck} alt='' />
                <div className='flex flex-col text-[14px] text-[#fff] leading-[21px]'>
                  <h1 className='font-[700] '>Cryptography</h1>
                  <span className='font-[400]'>
                    Exploring encryption algorithms and cryptographic protocols
                    to ensure data confidentiality and integrity.
                  </span>
                </div>
              </div>
              <div className='flex flex-row gap-[18px] items-center'>
                <img src={BlueCheck} alt='' />
                <div className='flex flex-col text-[14px] text-[#fff] leading-[21px]'>
                  <h1 className='font-[700] '>
                    Security Assessment and Penetration Testing:
                  </h1>
                  <span className='font-[400]'>
                    Learning techniques for assessing system security and
                    conducting penetration tests to uncover vulnerabilities.
                  </span>
                </div>
              </div>
              <div className='flex flex-row gap-[18px] items-center'>
                <img src={YellowCheck} alt='' />
                <div className='flex flex-col text-[14px] text-[#fff] leading-[21px]'>
                  <h1 className='font-[700] '>
                    Security Policies and Compliance:
                  </h1>
                  <span className='font-[400]'>
                    Developing and implementing security policies to ensure
                    compliance with regulations and standards.
                  </span>
                </div>
              </div>
              <div className='flex flex-row gap-[18px] items-center'>
                <img src={YellowCheck} alt='' />
                <div className='flex flex-col text-[14px] text-[#fff] leading-[21px]'>
                  <h1 className='font-[700] '>Ethical Hacking:</h1>
                  <span className='font-[400]'>
                    Understanding ethical hacking principles and techniques to
                    identify and address security weaknesses proactively.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberCatalogue;
