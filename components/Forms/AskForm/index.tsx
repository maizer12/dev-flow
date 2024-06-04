'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Editor } from '@tinymce/tinymce-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { createQuestion } from '@/lib/actions/question.action';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  title: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  answer: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  tags: z.array(z.string().min(1)).max(15).min(1).max(3),
});
interface IProps {
  edit: boolean;
  user: string;
}

const AskForm = ({ edit, user }: IProps) => {
  const router = useRouter();
  const editorRef = useRef('');
  const [isSend, setIsSend] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      answer: '',
      tags: [],
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSend(true);
    try {
      const { answer: content, ...data } = values;
      const res = { ...data, content, author: JSON.parse(user) };
      await createQuestion(res);
      // router.push('/');
    } catch (err) {
      console.log(err);
    } finally {
      setIsSend(false);
    }
  }
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, field: { name: string; value: string[] }) => {
    if (e.key === 'Enter' && field.name === 'tags') {
      e.preventDefault();

      const tagInput = e.target as HTMLInputElement;
      const tagValue = tagInput.value.trim();

      if (tagValue !== '') {
        if (tagValue.length > 15) {
          return form.setError('tags', {
            type: 'required',
            message: 'Tag must be less than 15 characters.',
          });
        }

        if (!field.value.includes(tagValue as never)) {
          form.setValue('tags', [...field.value, tagValue]);
          tagInput.value = '';
          form.clearErrors('tags');
        } else {
          form.trigger();
        }
      }
    }
  };

  const handleTagRemove = (tag: string, field: { name: string; value: string[] }) => {
    const newTags = field.value.filter((item: string) => item !== tag);

    form.setValue('tags', newTags);
  };

  const btnText = () => {
    if (isSend) return 'Sending...';
    if (edit) return 'Edit Question';

    return 'Ask a Question';
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="mb-9">
              <FormLabel className="paragraph-semibold font-inter font-bold text-dark-400">
                Question Title <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  type="tag"
                  {...field}
                  className="dark:dark-gradient block w-full rounded-lg bg-light-800 p-3.5 py-6 pl-7 font-inter text-base placeholder:text-light-400 placeholder:duration-700 focus:placeholder:opacity-0 dark:border-none dark:text-light-500 dark:placeholder:text-light-500"
                />
              </FormControl>
              <FormDescription className="base-medium font-inter text-light-500">
                Be specific and imagine you’re asking a question to another person.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="answer"
          render={({ field }) => (
            <FormItem className="mb-9 flex w-full flex-col gap-3">
              <FormLabel className="paragraph-semibold font-inter font-bold text-dark-400">
                Detailed explanation of your problem? <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Editor
                  apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
                  onInit={(evt, editor) => {
                    //    @ts-ignore
                    editorRef.current = editor;
                  }}
                  onBlur={field.onBlur}
                  onEditorChange={(content) => field.onChange(content)}
                  initialValue=""
                  init={{
                    height: 300,
                    menubar: false,
                    plugins: [
                      'advlist',
                      'autolink',
                      'lists',
                      'link',
                      'image',
                      'charmap',
                      'preview',
                      'anchor',
                      'searchreplace',
                      'visualblocks',
                      'codesample',
                      'fullscreen',
                      'insertdatetime',
                      'media',
                      'table',
                    ],
                    toolbar:
                      'undo redo | ' +
                      'codesample | bold italic forecolor | alignleft aligncenter |' +
                      'alignright alignjustify | bullist numlist',
                  }}
                />
              </FormControl>
              <FormDescription className="base-medium font-inter text-light-500">
                Introduce the problem and expand on what you put in the title. Minimum 20 characters.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="paragraph-semibold font-inter font-bold text-dark-400">
                Tags
                <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <>
                  <Input
                    className="dark:dark-gradient block w-full rounded-lg bg-light-800 p-3.5 py-6 pl-7 font-inter text-base placeholder:text-light-400 placeholder:duration-700 focus:placeholder:opacity-0 dark:border-none dark:text-light-500 dark:placeholder:text-light-500"
                    onKeyDown={(e) => handleInputKeyDown(e, field)}
                  />

                  {field.value.length > 0 && (
                    <div className="flex-start mt-2.5 gap-2.5">
                      {field.value.map((tag: string) => (
                        <Badge
                          key={tag}
                          className="subtle-medium
                          background-light800_dark300
                          text-light400_light500 flex items-center
                          justify-center gap-2 rounded-md border-none
                          px-4 py-2 capitalize
                          "
                          onClick={() => handleTagRemove(tag, field)}
                        >
                          {tag}
                          <Image
                            src="/assets/icons/close.svg"
                            alt="Close icon"
                            width={12}
                            height={12}
                            className="cursor-pointer
                          object-contain invert-0 dark:invert
                          "
                          />
                        </Badge>
                      ))}
                    </div>
                  )}
                </>
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Add up to 3 tags to describe what your question is about. You need to press enter to add a tag.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <Button type="submit" className="primary-gradient base-bold ml-auto  mt-12 block w-fit text-light-900">
          {btnText()}
        </Button>
      </form>
    </Form>
  );
};

export default AskForm;
