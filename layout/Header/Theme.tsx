'use client';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import { themes } from '@/constants';
import { useTheme } from '@/context/ThemeProvider';
import Image from 'next/image';

function Theme() {
  const { mode, setMode } = useTheme();

  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
          {mode === 'dark' ? (
            <Image src="assets/night.svg" width={20} height={20} alt="night" />
          ) : (
            <Image src="assets/sun.svg" width={20} height={20} alt="sun" />
          )}
        </MenubarTrigger>
        <MenubarContent className="absolute right-[-48px] mt-3 min-w-[120px] rounded border bg-light-900 py-2 dark:border-dark-400 dark:bg-dark-300">
          {themes.map((e) => (
            <MenubarItem
              key={e.value}
              onClick={() => {
                setMode(e.value);

                if (e.value !== 'system') {
                  localStorage.theme = e.value;
                } else {
                  localStorage.removeItem('theme');
                }
              }}
              className="flex cursor-pointer items-center gap-4 px-2.5 py-2 focus:bg-light-800 dark:focus:bg-dark-400"
            >
              <Image
                src={e.icon}
                width={16}
                height={16}
                alt={e.label}
                className={`${mode === e.value && 'active-theme'}`}
              />
              <p
                className={`body-semibold text-light-500 ${
                  mode === e.value ? 'text-primary-500' : 'text-dark100_light900'
                }`}
              >
                {e.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

export default Theme;
